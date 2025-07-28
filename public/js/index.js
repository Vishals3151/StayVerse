  function filterListings(category) {

    if(!category || category === "featured") {
        window.location.href = "/listings";
        return;
    }
    else {
        // Redirect page with query parameter for filtering
        window.location.href = `/listings?category=${category}`;
    }
  }