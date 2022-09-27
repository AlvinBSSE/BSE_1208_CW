window. addEventListener('load', () => {
    var photo_count = 0;
	var	file_count = 0; 
	const form = document.querySelector("#form");
    const list_el = document.querySelector("#tasks");
	const profileName = document.querySelector("#userName");
	const perStatement = document.querySelector("#pStatement");
	const hobbies = document.querySelector("#userHobbies");
	const uniEdu = document.querySelector("#uniHist");
	const secEdu = document.querySelector("#secHist");
	const priEdu = document.querySelector("#priHist");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        //creating main profile div
        const task_el = document.createElement('div');
		task_el.classList.add('task');

        //creating profile content div
		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');
		const pic_name_state_div = document.createElement('div');
		pic_name_state_div.classList.add('main_div');

		//creating profile picture div
		const img_div = document.createElement('div');
		img_div.setAttribute('class','profile-pic-div');
		const img_el = document.createElement('img');
		img_el.setAttribute('src','./images/image.jpg');
		img_el.setAttribute('class','photo');
		img_el.setAttribute('id','photo'+photo_count);
		img_el.setAttribute('alt','Avatar');
		const img_input = document.createElement('input');
		img_input.setAttribute('type','file');
		img_input.setAttribute('class','file');
		img_input.setAttribute('id','file'+file_count);
		const img_label = document.createElement('label');
		img_label.setAttribute('for','file'+file_count);
		img_label.setAttribute('id','uploadBtn');
		const upl_icon = document.createElement('img');
		upl_icon.setAttribute('src','./images/upload.png');

		img_label.appendChild(upl_icon)
		img_div.appendChild(img_el);
		img_div.appendChild(img_input);
		img_div.appendChild(img_label);
		
		//adding script for handling image upload.
		const img_script = document.createElement('script');
		img_script.setAttribute('type','text/javascript');
		img_script.innerHTML = `
			const img${photo_count} = document.querySelector('#photo${photo_count}');
			const file${file_count} = document.querySelector('#file${file_count}');
			//const uploadbtn = document.querySelector('#uploadbtn');
			file${file_count}.addEventListener('change', function(){
				const chosenFile = this.files[0];
				if(chosenFile){
					const reader = new FileReader();

					reader.addEventListener('load', function(){
						img${photo_count}.setAttribute('src',reader.result);
					})
				reader.readAsDataURL(chosenFile);
				}
			})
		`;
		img_div.appendChild(img_script);
		
		//adding username
		const name_state_div = document.createElement('div');
		name_state_div.setAttribute('class','name_n_statement');
		const para1 = document.createElement('p');
        para1.setAttribute('class','p_el_1');
        const p_span = document.createElement('span');

		const task = profileName.value;
		
		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		p_span.appendChild(task_input_el);
		para1.appendChild(p_span);
		name_state_div.appendChild(para1);
		
		//personal statement
		const para2 = document.createElement('p');
        para2.setAttribute('class','p_el_2');

		const p_statemet = perStatement.value;

		const statement_input_el = document.createElement('textarea');
		statement_input_el.classList.add('text');
		statement_input_el.type = 'text';
		statement_input_el.value = p_statemet;
		statement_input_el.setAttribute('readonly', 'readonly');

		para2.appendChild(statement_input_el);
		name_state_div.appendChild(para2);

		pic_name_state_div.appendChild(img_div);
		pic_name_state_div.appendChild(name_state_div);
		task_content_el.appendChild(pic_name_state_div);
		task_el.appendChild(task_content_el);

		//Education History
		//University
		const para3 = document.createElement('p');
        para3.setAttribute('class','p_el_3');
        var node = document.createTextNode("Education History");
        para3.appendChild(node);
        const eduList = document.createElement('ul');
        const uniEntry = document.createElement('li');
        const secEntry = document.createElement('li');
        const priEntry = document.createElement('li');

		const uniAtt = uniEdu.value;

		const university_input_el = document.createElement('input');
		university_input_el.classList.add('text');
		university_input_el.type = 'text';
		university_input_el.value = uniAtt;
		university_input_el.setAttribute('readonly', 'readonly');

		uniEntry.appendChild(university_input_el);
		eduList.appendChild(uniEntry);
		//Secondary
		const secAtt = secEdu.value;

		const secondary_input_el = document.createElement('input');
		secondary_input_el.classList.add('text');
		secondary_input_el.type = 'text';
		secondary_input_el.value = secAtt;
		secondary_input_el.setAttribute('readonly', 'readonly');

		secEntry.appendChild(secondary_input_el);
		eduList.appendChild(secEntry);
		//Primary
		const priAtt = priEdu.value;

		const primary_input_el = document.createElement('input');
		primary_input_el.classList.add('text');
		primary_input_el.type = 'text';
		primary_input_el.value = priAtt;
		primary_input_el.setAttribute('readonly', 'readonly');

		priEntry.appendChild(primary_input_el);
		eduList.appendChild(priEntry);
		para3.appendChild(eduList);
		task_content_el.appendChild(para3);
		
		//Hobbies
		const para4 = document.createElement('p');
        para4.setAttribute('class','p_el_4');
        var node2 = document.createTextNode("Hobbies : ");
        para4.appendChild(node2);

		const u_Hobbies = hobbies.value;

		const hobbies_input_el = document.createElement('textarea');
		hobbies_input_el.classList.add('text');
		hobbies_input_el.type = 'text';
		hobbies_input_el.value = u_Hobbies;
		hobbies_input_el.setAttribute('readonly', 'readonly');

		para4.appendChild(hobbies_input_el);
		task_content_el.appendChild(para4);

        //creating action buttons div
        const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		profileName.value = '';
		perStatement.value = '';
		uniEdu.value = '';
		secEdu.value = '';
		priEdu.value = '';
		hobbies.value = '';
		photo_count++;
		file_count++;

        task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
				statement_input_el.removeAttribute("readonly");
				university_input_el.removeAttribute("readonly");
				secondary_input_el.removeAttribute("readonly");
				primary_input_el.removeAttribute("readonly");
				hobbies_input_el.removeAttribute("readonly");
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
				statement_input_el.setAttribute("readonly", "readonly");
				university_input_el.setAttribute("readonly", "readonly");
				secondary_input_el.setAttribute("readonly", "readonly");
				primary_input_el.setAttribute("readonly", "readonly");
				hobbies_input_el.setAttribute("readonly", "readonly");
			}
        });

        task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
    });
});