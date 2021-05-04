let users = [];

let userInfo = {
   name: '',
   city: '',
   age: '',
   about: ''
}

$('#save').click(function () {

   let result = confirm("Вы точно хотите сохранить?")

   if (result == true) {
      users.push(userInfo);

      userInfo = {};

      $('#name, #age, #info').val('');

      console.log(users);

   } 

});



$('#city, #name, #age, #info').change(function () {

   let _this = $(this)

   let fieldName = _this.attr('name')

   userInfo[fieldName] = _this.val()


});

