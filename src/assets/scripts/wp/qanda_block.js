(function (blocks, element, blockEditor) {
  let el = element.createElement;
  let RichText = blockEditor.RichText;

  blocks.registerBlockType(
    "my-blocks/sample-block",
    {
      title: "サンプルブロック",
      icon: "heart",
      description: "これはテスト用のブロックです",
      category: "common",
      example: {},

      attributes: {
        myText1: {
          type: 'string',
          source: 'html',
          selector: '.my-text-class-1'
        },
        myText2: {
          type: 'string',
          source: 'html',
          selector: '.my-text-class-2'
        }
      },

      edit: (props) => {
        let attributes = props.attributes;

        return el('div', { style: { margin: "100px 0" } },
          el(
            RichText,
            {
              tagName: 'p', // テキストエリアに対応するタグ名
              className: 'my-text-class-1',
              style: {
                backgroundColor: "#ff83003b",
                color: "black",
                lineHeight: "200px",
                textAlign: "center",
                fontSize: "20px",
                margin: "20px 0",
                position: "relative",
              },
              onChange: function(newContent) {
                props.setAttributes({ myText1: newContent });
              },
              value: attributes.myText1,
              placeholder: 'ここにテキストを入力してください... (1)',
            }
          ),
          el(
            RichText,
            {
              tagName: 'p', // テキストエリアに対応するタグ名
              className: 'my-text-class-2',
              style: {
                backgroundColor: "#ff83003b",
                color: "black",
                lineHeight: "200px",
                textAlign: "center",
                fontSize: "20px",
                margin: "20px 0",
                position: "relative",
              },
              onChange: function(newContent) {
                props.setAttributes({ myText2: newContent });
              },
              value: attributes.myText2,
              placeholder: 'ここにテキストを入力してください... (2)',
            }
          )
        );
      },

      save: (props) => {
        let attributes = props.attributes;

        return el('div', { style: { margin: "100px 0" } },
          el(
            RichText.Content,
            {
              tagName: 'p', // テキストエリアに対応するタグ名
              className: 'my-text-class-1',
              style: { margin: "20px 0" },
              value: attributes.myText1,
            }
          ),
          el(
            RichText.Content,
            {
              tagName: 'p', // テキストエリアに対応するタグ名
              className: 'my-text-class-2',
              style: { margin: "20px 0" },
              value: attributes.myText2,
            }
          )
        );
      }
    }
  );
})(window.wp.blocks, window.wp.element, window.wp.blockEditor);
