$(function(){
  var $width  = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area   = $('#area');



$btnCal.click(function(){
  if(!validate('#width') || !validate('#height')) return;

  var w = Number($width.val()),
      h = Number($height.val());

  var p = 2 * (w + h),
      a = w * h;
  
  $perimeter.val(p);
  $area.val(a);

});



$width.keypress(function(e){
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()\=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
    e.preventDefault();
    return;
  } 
  var pos = e.target.selectionStart,
      con = e.target.value;
if(e.key === 'e'){
  if(con.indexOf('e') !== -1 || pos === 0 || con.indexOf('e') !== -1){
    e.preventDefault();
    return;
  }
  if(pos === 1 && con.substring(0,1) === '-'){
    e.preventDefault();
    return;
  }
}
});

$height.keypress(function(e){
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()\=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
    e.preventDefault();
    return;
  }
});

$width.focusout(function(){
  if(!validate('#width')) $width.select(); 
});
$height.focusout(function(){
  if(validate('#height')) $height.select();
});
  function validate(field){
    //get DOM error message
    var $data = $(field),
        $msg  = $(field + '-validation-message');

    //validate null
    if($data.val() === ''){
      $msg.html('不能为空!');
      $data.select();
      return false;
    }

    //validate > 0
    if(Number($data.val()) < 0){
      $msg.html('必须大于零!');
      $data.select();
      return false;
    }

    //validate number   
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
      $msg.html('必须是数值!');
      $data.select();
      return false;
    }
    $msg.html('');
    return true;
  }
});
