(function(i,n,o){let e=n.createElement,a=o.RichText;i.registerBlockType("my-blocks/sample-block",{title:"サンプルブロック",icon:"heart",description:"これはテスト用のブロックです",category:"common",example:{},attributes:{myText1:{type:"string",source:"html",selector:".my-text-class-1"},myText2:{type:"string",source:"html",selector:".my-text-class-2"}},edit:t=>{let l=t.attributes;return e("div",{style:{margin:"100px 0"}},e(a,{tagName:"p",className:"my-text-class-1",style:{backgroundColor:"#ff83003b",color:"black",lineHeight:"200px",textAlign:"center",fontSize:"20px",margin:"20px 0",position:"relative"},onChange:function(s){t.setAttributes({myText1:s})},value:l.myText1,placeholder:"ここにテキストを入力してください... (1)"}),e(a,{tagName:"p",className:"my-text-class-2",style:{backgroundColor:"#ff83003b",color:"black",lineHeight:"200px",textAlign:"center",fontSize:"20px",margin:"20px 0",position:"relative"},onChange:function(s){t.setAttributes({myText2:s})},value:l.myText2,placeholder:"ここにテキストを入力してください... (2)"}))},save:t=>{let l=t.attributes;return e("div",{style:{margin:"100px 0"}},e(a.Content,{tagName:"p",className:"my-text-class-1",style:{margin:"20px 0"},value:l.myText1}),e(a.Content,{tagName:"p",className:"my-text-class-2",style:{margin:"20px 0"},value:l.myText2}))}})})(window.wp.blocks,window.wp.element,window.wp.blockEditor);
