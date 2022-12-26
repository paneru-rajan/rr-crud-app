function getActionButtons () {
  return `<a class="add"><i class="fa fa-plus"></i></a>
<a class="edit"><i class="fa fa-edit"></i></a>
<a class="delete"><i class="fa fa-trash"></i></a>
`;
}

function createTR ({ id = 0, name, email }) {
  return `<tr>
    <td class="id">${id}</td>
    <td class="name">${name}</td>
    <td class="email">${email}</td>
    <td class="action">
        ${getActionButtons()}
    </td>
</tr>`;
}

function generateAddNewForm () {
  return `<tr>
    <td class="id">...</td>
    <td class="name"><input type="text" class="form-control" name="name"></td>
    <td class="email"><input type="text" class="form-control" name="email"></td>
    <td class="action">
        ${getActionButtons()}
    </td>
</tr>`;
}

$(document).ready(function () {

  // Append table with add row form on add new button click
  $('.add-new').click(function () {
    $(this).attr('disabled', 'disabled');
    let index = $('table tbody tr:first-child').index();
    $('table tbody').prepend(generateAddNewForm());
    $('table tbody tr').eq(index).find('.add, .edit').toggle();
  });

  // Add row on add button click
  $(document).on('click', '.add', function () {
    let empty = false;
    let input = $(this).parents('tr').find('input[type="text"]');

    let id = $(this).parents('tr').find('td:first-child').text();
    id = isNaN(id) ? undefined : Number(id);
    let payload = {};

    input.each(function () {
      if (!$(this).val()) {
        $(this).addClass('error');
        empty = true;
      } else {
        $(this).removeClass('error');
      }
      const name = $(this).attr('name');
      payload[name] = $(this).val();
    });
    $(this).parents('tr').find('.error').first().focus();
    if (empty) return;
    input.each(function () {
      $(this).parent('td').html($(this).val());
    });
    $(this).parents('tr').find('.add, .edit').toggle();
    $('.add-new').removeAttr('disabled');

    if (id)
      updateStudent(id, payload);
    else
      createStudent(payload).then(data => {
        $(this).parents('tr').find('td:first-child').text(data.id);
      });
  });

  // Edit row on edit button click
  $(document).on('click', '.edit', function () {
    $(this).parents('tr').find('td:not(:last-child, :first-child)').each(function () {
      const value = $(this).text();
      const name = $(this).attr('class');
      $(this).html(`<input type="text" class="form-control" name="${name}" value="${value}">`);
    });
    $(this).parents('tr').find('.add, .edit').toggle();
    $('.add-new').attr('disabled', 'disabled');
  });

  // Delete row on delete button click
  $(document).on('click', '.delete', function () {
    let id = $(this).parents('tr').find('td:first-child').text();
    deleteStudent(id);
    $(this).parents('tr').remove();
    $('.add-new').removeAttr('disabled');
  });

  getAllStudent().then(data => {
    data.forEach(row => {
      $('table tbody').prepend(createTR(row));
    });
  });
});
