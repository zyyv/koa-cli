import ejs from 'ejs'
import fs from 'fs'
import path from 'path'

export default (config) => {
  const indexTemplate = fs.readFileSync(path.resolve('./template/index.ejs'))

  const code = ejs.render(indexTemplate.toString(), {
    port: config.port,
    middleware: config.middleware
  })

  return code

  //   let template = ejs.compile(str, options);
  //    template(data);
  //    // => Rendered HTML string

  //    ejs.render(str, data, options);
  //    // => Rendered HTML string

  //    ejs.renderFile(filename, data, options, function(err, str){
  //       // str => Rendered HTML string
  //    });
}