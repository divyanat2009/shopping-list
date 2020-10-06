function addItem(){
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        console.log("Hello World");
        const entryItem=$('#shopping-list-entry').val()
        const liItem=`<li>
        <span class="shopping-item">${entryItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
      $('.shopping-list').append(liItem)
    
    })
}
function checkItem(){
    $('.shopping-item-toggle').click(function(){
        console.log($(".shopping-item").find('data-id').text());
        $('.shopping-item').addClass('shopping-item__checked')
    });
}
function init(){
    addItem();
    checkItem();
}    
(function(){
   /* $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
    });


    
    $('.shopping-list-entry').on('click', '.shopping-item-toggle', function(event){
        $(this).closest('.shopping-item-controls').toggle('.shopping-item-toggle')
    });
*/
init();

})();

