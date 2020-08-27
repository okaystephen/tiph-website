// CMS Table Sort
$(document).ready(function () {
  $('#pages-table').DataTable({
    "aaSorting": [],
    columnDefs: [{
      orderable: false,
      targets: [3, 4, 5]
    }]
  })

  $('#blog-table').DataTable({
    "aaSorting": [],
    columnDefs: [{
      orderable: false,
      targets: [2, 3, 4]
    }]
  })

  $('#admin-table').DataTable({
    "aaSorting": [],
    columnDefs: [{
      orderable: false,
      targets: [3, 4]
    }]
  })

  $('#preapps-table').DataTable({
    "aaSorting": [],
    columnDefs: [{
      orderable: false,
      targets: [3, 4, 5]
    }]
  })

  $('#apps-table').DataTable({
    "aaSorting": [],
    columnDefs: [{
      orderable: false,
      targets: [3, 4, 5]
    }]
  });
});

// Quill.js
$(document).ready(function () {
  function GetFindOut(value) {
    var element = document.getElementById('findouttxt');
    if (value == 'other')
      element.style.display = 'block';
    else
      element.style.display = 'none';
  }

  // add blog POST called
  $('#addBlog').click(function () {
    // Get the data from the form
    var blog_title = $('#new_blog_title').val();
    var blog_content = $('#new_blog_content').val();
    var keywords = $('#new_blog_keywords').val();

    //COMMENTED OUT BECAUSE IT MAKES THE QUILL EDITOR DISAPPEAR
    //        var newBlog = {
    //            blog_title: blog_title,
    //            blog_content: blog_content;
    //        };

    $.post('addBlog', newBlog, function (data, status) {
      console.log(data);

    });
  });
});

//cms-blog-new-page quill
var blogQuill = new Quill('#blog-quill', {
  modules: {
    toolbar: [
      ['bold', 'italic'],
      ['link', 'blockquote', 'code-block', 'image'],
      [{ list: 'ordered' }, { list: 'bullet' }]
    ]
  },
  placeholder: 'Insert body here.',
  theme: 'snow'
});
//cms-proj-new-page quill
var projQuill = new Quill('#proj-quill', {
  modules: {
    toolbar: [
      ['bold', 'italic'],
      ['link', 'blockquote', 'code-block', 'image'],
      [{ list: 'ordered' }, { list: 'bullet' }]
    ]
  },
  placeholder: 'Insert body here.',
  theme: 'snow'
});

var quill = new Quill('#editor-container', {
  modules: {
    toolbar: [
      ['bold', 'italic'],
      ['link', 'blockquote', 'code-block', 'image'],
      [{ list: 'ordered' }, { list: 'bullet' }]
    ]
  },
  placeholder: 'Insert body here.',
  theme: 'snow'
});

var blogForm = document.querySelector('form');
form.onsubmit = function () {
  // Populate hidden form on submit
    var proj_content = document.getElementById('blog_content');
    
    editor.on('text-change', function() {
      var deltaBlog = editor.getContents();
      var innerBlog = projQuill.root.innerHTML;
      proj_content.innerHTML = JSON.stringify(deltaBlog);
      //proj_content.innerHTML = innerBlog;
    });

  console.log("New Blog Submitted", $(form).serialize(), $(form).serializeArray());

  alert('New Blog Submitted!')
  return false;
};

var projForm = document.querySelector('form');
form.onsubmit = function () {
  // Populate hidden form on submit
    var proj_content = document.getElementById('proj_content');
    
    editor.on('text-change', function() {
      var deltaProj = editor.getContents();
      var innerProj = projQuill.root.innerHTML;
      proj_content.innerHTML = JSON.stringify(deltaProj);
      //proj_content.innerHTML = innerProj;
    });

  console.log("New Project Submitted", $(form).serialize(), $(form).serializeArray());

  alert('New Project Submitted!')
  return false;
};

// CMS Search
function cms_search() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("cms-search");
  filter = input.value.toUpperCase();
  table = document.getElementById("pages-table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// CMS Table Sort
$(document).ready(function () {
  $('#pages-table').DataTable({
    "aaSorting": [],
    columnDefs: [{
      orderable: false,
      targets: [3, 4, 5]
    }]
  })

  $('#blog-table').DataTable({
    "aaSorting": [],
    columnDefs: [{
      orderable: false,
      targets: [2, 3, 4]
    }]
  })

  $('#admin-table').DataTable({
    "aaSorting": [],
    columnDefs: [{
      orderable: false,
      targets: [3, 4]
    }]
  })

  $('#preapps-table').DataTable({
    "aaSorting": [],
    columnDefs: [{
      orderable: false,
      targets: [3, 4, 5]
    }]
  })

  $('#apps-table').DataTable({
    "aaSorting": [],
    columnDefs: [{
      orderable: false,
      targets: [3, 4, 5]
    }]
  });
});
