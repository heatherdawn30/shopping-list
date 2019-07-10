//when check button is pressed line goes through item
//remove HTML element when delete is pressed
//add HTML element when add is pressed
//link to jQuery ($())
//link your JS to HTML/CSS page on github
//keyboard friendly (return/tab used when toggle button in place)
//add links to your JS in HTML code (at bottom)

function add() {
  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    
    $(`<li>
        <span class="shopping-item">` + $('#shopping-list-entry').val() + `</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`).appendTo(".shopping-list");

    $(deletes);
    $(check);

    //erase the text in the form input box
    $('#shopping-list-entry').val("")
  });
}
$(add);
 

function deletes() {
  $(".shopping-item-delete").click(function(event) {
    $(this).closest('li').remove();
  });  
}
$(deletes);


function check() {
  //this saves the state of the check/unchecked status of the item
  //if it is true, it means the item is unchecked
  //if it is false, it means the item is checked
  //it is used by toggleClass() to determine if the "shopping-item__checked" class should be added or removed to get a strikethrough effect
  let addOrRemove = true;
    
  $(".shopping-item-toggle").click(function(event) {
    //for some reason, "impossible" combinations were happening, such as the list item being crossed but addOrRemove being true...
    //I'm not sure how it got in this state, but it did, and these if statements are to handle those situations...
    //if the list item is crossed and addOrRemove is true, we force addOrRemove to false like it should be...
    //and likewise, if the item isn't crossed and addOrRemove is false, we force addOrRemove to true
    //we use to have simpler code toggling the addOrRemove boolean, but this code is overkill, so it didn't serve a purpose anymore
    if ($(this).closest('li').find(".shopping-item").hasClass("shopping-item__checked") === true && addOrRemove === true) {
      addOrRemove = false;
    }
    if ($(this).closest('li').find(".shopping-item").hasClass("shopping-item__checked") === false && addOrRemove === false) {
      addOrRemove = true;
    }
    
    $(this).closest('li').find(".shopping-item").toggleClass( "shopping-item__checked", addOrRemove);
    
    if (addOrRemove) {
      $(this).text("uncheck");
    } else {
      $(this).text("check");
    }
  });
}
$(check);
