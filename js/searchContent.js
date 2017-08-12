function searchFunction() {
  var searchText, filterText, table, tr, td, i;
  searchText = document.getElementById("searchInput");
  filterText = searchText.value.toLowerCase();
  table = document.getElementById("searchTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toLowerCase().indexOf(filterText) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
