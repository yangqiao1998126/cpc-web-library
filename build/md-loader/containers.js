const mdContainer = require('markdown-it-container');

module.exports = md => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : '';
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
        return `<cpc-display-box :sign="${idx}">
        ${description ? `<div>${md.render(description)}</div>` : ''}
        <!--element-demo:<!--cpc-display-box-id: ${idx}:cpc-display-box-id--> ${content}:element-demo-->
        `;
      }
      return '</cpc-display-box>';
    }
  });

  md.use(mdContainer, 'tip');
  md.use(mdContainer, 'warning');
};
