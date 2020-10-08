function addItem(){
  /* Stop the default form submission*/
  $('#js-shopping-list-form').submit(function(event){
      event.preventDefault();
      /*assign a constant variabe to find the value of text entered */
      const entryItem=$('#shopping-list-entry').val();
      /*Create a data-item-id atrribute for each shopping lust item */
      const liItem=`<li>
      <span class="shopping-item" data-id=${cuid()}>${entryItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
    /*Add the list item to the end of the list */   
    $('.shopping-list').append(liItem);
    checkItem();
    deleteItem();
  })
}

function getSpanId(spanElement)
{
return spanElement.closest('li').children('span').data("id") 
}
/*Uncheck item */

function uncheckItem(button, spanId)
{
button.closest('button').text("Uncheck");
button.click(function ()
{
  $(".shopping-item-toggle").closest('li').find(`span[data-id='${spanId}']`).removeClass("shopping-item__checked")
  $(this).closest('button').text("check");
  checkItem();
}) 
}
/*Check item */
function checkItem(){
$(".shopping-item-toggle").click(function (event) {
  let spanId = getSpanId($(this));
  $(this).closest('li').find(`span[data-id='${spanId}']`).addClass("shopping-item__checked");
  uncheckItem($(this), spanId);
 
})
}
/*Remove item*/
function deleteItem()
{
$(".shopping-item-delete").click(function(){
  $(this).closest('li').remove();
});

}

function init(){
  addItem();
  checkItem();
  deleteItem();
}    

$(init);