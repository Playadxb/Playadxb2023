<script>
function downloadFile(filePath) {
  var link = document.createElement('a');
  link.href = filePath;
  link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
  link.click();
}
 downloadFile('./03. Pool & Beach Menu.pdf');

</script>


<style>
    </style>