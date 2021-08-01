(this.webpackJsonpeink_display_project=this.webpackJsonpeink_display_project||[]).push([[0],{20:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),i=a.n(o),c=a(2),s=a(3),d=a(5),h=a(4),l=a(7),j=a.n(l),u=a(0),p=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"ui header",children:"Order Photos"}),Object(u.jsx)("p",{children:"Click, hold and drag to change order."}),Object(u.jsx)("div",{children:Object(u.jsx)(j.a,{reorderId:"my-list",component:"div",placeholderClassName:"placeholder",draggedClassName:"dragged",lock:"horizontal",holdTime:500,touchHoldTime:500,mouseHoldTime:200,onReorder:this.props.onReorder,autoScroll:!0,disabled:!1,disableContextMenus:!0,placeholder:Object(u.jsx)("div",{className:"custom-placeholder"}),children:this.props.photos.map((function(t){return Object(u.jsx)("div",{className:"ui segment",children:Object(u.jsxs)("div",{className:"ui two column grid",children:[Object(u.jsx)("div",{className:"column",children:Object(u.jsx)("img",{className:"ui image",src:"\\Photos\\".concat(t.url),style:{height:"100px"}})}),Object(u.jsx)("div",{className:"right aligned column",children:Object(u.jsx)("button",{className:"ui button",onClick:function(){return e.props.onPhotoDelete(t)},children:"DELETE PHOTO"})})]})},t.value)}))})})]})}}]),a}(r.a.Component),m=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onFormSubmit=function(e){},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"ui header",children:"Upload Photos"}),Object(u.jsxs)("form",{onSubmit:this.onFormSubmit,className:"ui form",method:"POST",action:"/api/upload_photo",encType:"multipart/form-data",children:[Object(u.jsx)("input",{type:"file",name:"file",accept:"image/*"}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]})]})}}]),a}(r.a.Component),O=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onFrameRateChange=function(){e.props.onFrameRateChange(document.getElementById("frameRate").value)},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"ui header",children:"Photo Properties"}),Object(u.jsx)("form",{className:"ui form",children:Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{children:"Time Between Images"}),Object(u.jsx)("input",{type:"number",required:!0,id:"frameRate",name:"price",min:"3",max:"30",value:this.props.frameRate,step:"1",onChange:this.onFrameRateChange})]})})]})}}]),a}(r.a.Component),b=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={OrderedPhotos:[],frameRate:3},e.onFrameRateChange=function(t){e.setState({frameRate:t}),fetch("/api/save_frame_rate",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e.state.frameRate)}).then()},e.getFrameRate=function(){fetch("/api/get_frame_rate").then((function(e){return e.json()})).then((function(t){e.setState({frameRate:t.frameRate})}))},e.getOrderedPhotos=function(){fetch("/api/get_ordered_photos").then((function(e){return e.json()})).then((function(t){e.setState({OrderedPhotos:t.photos})}))},e.onPhotoDelete=function(t){console.log(t),fetch("/api/delete_photo",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then().then(e.getOrderedPhotos())},e.onReorder=function(t,a,n,r,o){e.setState({OrderedPhotos:Object(l.reorder)(e.state.OrderedPhotos,a,n)}),fetch("/api/give_ordered_photos",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e.state.OrderedPhotos)}).then()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getOrderedPhotos(),this.getFrameRate()}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"ui header",children:"PHOTOS"}),Object(u.jsx)("div",{className:"ui divider"}),Object(u.jsx)(O,{frameRate:this.state.frameRate,onFrameRateChange:this.onFrameRateChange}),Object(u.jsx)("div",{className:"ui hidden divider"}),Object(u.jsx)(m,{}),Object(u.jsx)("div",{className:"ui hidden divider"}),Object(u.jsx)(p,{photos:this.state.OrderedPhotos,onPhotoDelete:this.onPhotoDelete,onReorder:this.onReorder})]})}}]),a}(r.a.Component),f=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"ui text container ",children:Object(u.jsxs)("div",{className:"ui padded segment",children:[Object(u.jsx)("h1",{className:"ui header",children:"eInk Display Project"}),Object(u.jsx)("div",{className:"ui horizontal divider",children:"William & Brynlea"}),Object(u.jsx)("p",{className:"ui paragraph",children:"Love you guys I hope you enjoy this gift."}),Object(u.jsx)(b,{}),Object(u.jsx)("h2",{className:"ui header",children:"VIDEOS"}),Object(u.jsx)("div",{className:"ui divider"})]})})}}]),a}(r.a.Component);a(19);i.a.render(Object(u.jsx)(f,{}),document.querySelector("#root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.dd0223e0.chunk.js.map