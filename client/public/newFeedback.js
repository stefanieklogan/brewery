const newFormHandler = async (event) => {
    event.preventDefault();
    console.log('submit btn pressed');
  
    const name = document.querySelector('.name').value.trim();
    const feedback = document.querySelector('.feedback').value.trim();
    const email = document.querySelector('.email').value.trim();
    const checkbox = document.querySelector('.checkbox').value.trim();
  
    if (name && feedback) {
      const response = await fetch(`/api/feedback`, {
        method: 'POST',
        body: JSON.stringify({ name: name, feedback: feedback, email: email, checkbox: checkbox }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log(name);
        console.log(feedback);
        console.log(email);
        console.log(checkbox);
        document.location.replace('/');
      } else {
        alert('Failed to submit feed. Try again.');
      }
    }
  };

  document
  .querySelector('.submitBtn')
  .addEventListener('click', newFormHandler);