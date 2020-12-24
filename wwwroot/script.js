function TestDataTablesAdd(table) {
    $(document).ready(function () {
        $(table).DataTable();
    });
}

function TestDataTablesRemove(table) {
    $(document).ready(function () {
        $(table).DataTable().destroy();
        // Removes the datatable wrapper from the dom.
        var elem = document.querySelector(table + '_wrapper');
        elem.parentNode.removeChild(elem);
    });
}    

function saveAsFile(fileName, bytesBase64) {
    var link = document.createElement('a');
    link.download = fileName;
    console.log(bytesBase64);
    link.href = 'data:application/pdf;base64,' + bytesBase64;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}