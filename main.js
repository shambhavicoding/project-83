var last_position_of_x,last_position_of_y;
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d");
color="black";
width_of_line=2;
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_moseup);
function my_moseup(e){
mouseEvent="my_moseup";
}

canvas.addEventListener("moseleave",my_mouseleave)
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientX-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle();
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
last_position_of_touch_y,last_position_of_touch_x;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    current_position_of_touch_x=e.clientX-canvas.offsetLeft;
    current_position_of_touch_y=e.clientX-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle();
    ctx.lineWidth=width_of_line;
    ctx.moveTo(last_position_of_touch_x,last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();
    last_position_of_touch_x=current_position_of_touch_x;
    last_position_of_touch_y=current_position_of_touch_y;
}