  searchInput = document.getElementById('searchInput');
  suggestionList = document.getElementById('suggestionsList');

  searchInput.addEventListener('input', async ()=> {
    const query = searchInput.value.trim();
    if (!query) {
      suggestionsList.innerHTML = '';
      return;
    }

    try {
      const res = await fetch('listings/suggestions?q=' + encodeURIComponent(query));
      const suggestions = await res.json();

      suggestionsList.innerHTML = '';

      suggestions.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item list-group-item-action';
        li.textContent = item;
        li.addEventListener('click', () => {
          searchInput.value = item;
          suggestionsList.innerHTML = '';
        });
        suggestionsList.appendChild(li);
    });

    } catch (err) {
      console.log(err);
    }
  });