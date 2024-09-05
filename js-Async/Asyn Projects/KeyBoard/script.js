const insert = document.getElementById('insert');

window.addEventListener('keydown' , (evnt)=>{
    insert.innerHTML = `
    <div class = 'color'>
    <table>
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${evnt.key}</td>
            <td>${evnt.keyCode}</td>
            <td>${evnt.code}</td>
        </tr>

    </table>
    
    </div>
    `
})