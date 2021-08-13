    /**
     * Saving button
     */
     const saveButton = document.getElementById('saveButton');
     /**
      * To initialize the Editor, create a new instance with configuration object
      * @see docs/installation.md for mode details
      */
     var editor = new EditorJS({
       /**
        * Wrapper of Editor
        */
       holder: 'editorjs',
       /**
        * Tools list
        */
       tools: {
         /**
          * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}
          */
         header: {
           class: Header,
           inlineToolbar: ['link'],
           config: {
             placeholder: 'Header'
           },
           shortcut: 'CMD+SHIFT+H'
         },
         /**
          * Or pass class directly without any configuration
          */
         image: {
           class: SimpleImage,
           inlineToolbar: ['link'],
         },
         list: {
           class: List,
           inlineToolbar: true,
           shortcut: 'CMD+SHIFT+L'
         },
         checklist: {
           class: Checklist,
           inlineToolbar: true,
         },
         quote: {
           class: Quote,
           inlineToolbar: true,
           config: {
             quotePlaceholder: 'Enter a quote',
             captionPlaceholder: 'Quote\'s author',
           },
           shortcut: 'CMD+SHIFT+O'
         },
         warning: Warning,
         marker: {
           class:  Marker,
           shortcut: 'CMD+SHIFT+M'
         },
         code: {
           class:  CodeTool,
           shortcut: 'CMD+SHIFT+C'
         },
         delimiter: Delimiter,
         inlineCode: {
           class: InlineCode,
           shortcut: 'CMD+SHIFT+C'
         },
         linkTool: LinkTool,
         embed: Embed,
         table: {
           class: Table,
           inlineToolbar: true,
           shortcut: 'CMD+ALT+T'
         },
       },
       /**
        * This Tool will be used as default
        */
       // initialBlock: 'paragraph',
       /**
        * Initial Editor data
        */
       data: {
         blocks: [
           {
             type: "header",
             data: {
               text: "Write Your Title here",
               level: 2
             }
           },
           {
             type : 'paragraph',
             data : {
               text : 'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.'
             }
           },
           {
             type: "header",
             data: {
               text: "Key features",
               level: 3
             }
           },
           {
             type : 'list',
             data : {
               items : [
                 'It is a block-styled editor',
                 'It returns clean data output in JSON',
                 'Designed to be extendable and pluggable with a simple API',
               ],
               style: 'unordered'
             }
           },
           {
             type : 'paragraph',
             data : {
               text : 'Clean data is useful to sanitize, validate and process on the backend.'
             }
           },
           {
             type : 'delimiter',
             data : {}
           },
           {
             type : 'paragraph',
             data : {
               text : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestiae doloremque incidunt perferendis cupiditate quisquam repudiandae placeat dicta.'
             }
           },
           {
             type: 'image',
             data: {
               url: 'https://5.imimg.com/data5/XM/GT/AQ/SELLER-6309496/beauty-parlor-500x500.jpg',
               caption: '',
               stretched: false,
               withBorder: true,
               withBackground: false,
             }
           },
         ]
       },
       onReady: function(){
        //  saveButton.click();
       },
       onChange: function() {
         console.log('something changed');
       }
     });
     
     saveButton.addEventListener('click', function () {
       editor.save().then((savedData) => {
            console.log(JSON.stringify(savedData));
            // document.getElementById('ftext').value = JSON.stringify(savedData);
            // a = document.getElementById("myForm").submit();
            // console.log(a);
            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(savedData));
            var dlAnchorElem = document.getElementById('downloadAnchorElem');
            dlAnchorElem.setAttribute("href",     dataStr     );
            dlAnchorElem.setAttribute("download", "scene.json");
            dlAnchorElem.click();
       });
     });