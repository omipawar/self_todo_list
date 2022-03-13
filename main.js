let id = 'no';
// localStorage.clear();

function addData() {
    let name = document.getElementById('mytext').value;
    console.log(name);
    if (name == '') {
        alert('Plese enter your name')
    }
    else {
        if (id == 'no') {
            let arr = JSON.parse(localStorage.getItem('crud'));
            console.log(arr);
            if (arr == null) {
                let data = [name];
                localStorage.setItem('crud', JSON.stringify(data));
            }
            else {
                arr.push(name);
                console.log('new array ' + arr)
                localStorage.setItem('crud', JSON.stringify(arr))
            }
            document.getElementById('mytext').value = ' ';

        
        }
        else {
            let arr = JSON.parse(localStorage.getItem('crud'));
            arr[id] = name;
            localStorage.setItem('crud',JSON.stringify(arr));
            document.getElementById('mytext').value = ' ';
        }
        selectData();
    }
    
    
}

function selectData() {
    let arr = JSON.parse(localStorage.getItem('crud'));
    if (arr != null) {
        let html = '';
        let srno = 1;
        for (let i = 0; i < arr.length; i++) {
            html = html+ `<tr><td>${srno}</td><td>${arr[i]}</td><td><a href='javascript:void(0)' onclick='deleteData(${i})'>Delete</a></td><td><a href='javascript:void(0)' onclick='editData(${i})'>Edit</a></td></tr>`;
            srno++
        }
        document.getElementById('data').innerHTML = html;        
    }

}

function editData(rid) {
    id = rid;
    let arr = JSON.parse(localStorage.getItem('crud'));
    document.getElementById('mytext').value = arr[rid];
}

function deleteData(rid) {
    let arr= JSON.parse(localStorage.getItem('crud'));
    arr.splice(rid,1);
    localStorage.setItem('crud',JSON.stringify(arr));
    selectData();
}