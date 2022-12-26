API_HOST = 'http://0.0.0.0:5000';

async function getAllStudent () {
  return await $.get(`${API_HOST}/student`);
}

async function deleteStudent (id) {
  return await $.ajax({
    url: `${API_HOST}/student/${id}`,
    type: 'DELETE'
  });
}

async function createStudent (payload) {
  return await $.ajax({
    url: `${API_HOST}/student`,
    type: 'POST',
    data: JSON.stringify(payload),
    contentType: 'application/json'
  });
}

async function updateStudent (id, payload) {
  return await $.ajax({
    url: `${API_HOST}/student/${id}`,
    dataType: 'json',
    type: 'PUT',
    data: JSON.stringify(payload),
    contentType: 'application/json'
  });
}
