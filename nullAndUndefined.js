typeof null;
typeof undefined;

undefined == null;
undefined === null;

(function(){
  var undefined = 'palavra';
  console.log(undefined, typeof undefined);
});

(function(undefined){
  console.log(undefined, typeof undefined);
})('palavra');