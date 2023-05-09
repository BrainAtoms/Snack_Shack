const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#recipe-name').value.trim();
    const ingredients = document.querySelector('#recipe-ing').value.trim();
    const steps = document.querySelector('#recipe-dir').value.trim();
    const category = document.querySelector('#recipe-category').value.trim();
    const time = document.querySelector('#recipe-time').value.trim();
  
    if (title && ingredients && time && steps && category) {
      const response = await fetch(`/api/recipes`, {
        method: 'POST',
        body: JSON.stringify({ title, ingredients, time, steps, category }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create recipe');
      }
    }
  };

  document
  .querySelector('.new-recipe-form')
  .addEventListener('submit', newFormHandler);