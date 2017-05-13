# Vanilla mask 1.0.0

It's a pure JavaScript mask input.
Now you can use a simple and pure javascript lib to mask your input elements, without need to load jQuery.

# Usage

Using npm run:

    npm install vanilla-mask --save
    
To use with ES6:

    import Mask from 'vanilla-mask'
  
    var mask = new Mask();
    mask.build('text','format');

Examples:

    mask.build('1234567890','(##) ####-####'); // Formatted (12) 3456-7890
    mask.build('12345678901','###.###.###-##'); // Formatted 123.456.789-01
    
    // Formatted with placeholder
    mask.build('12345','(##) ####-####', '_'); // Formatted (12) 345_-____
    mask.build('123456','###.###.###-##', ' '); // Formatted 123.456.   -  
    

## Working with regexp
For better performance, it is recommended to use regexp, which will give you more freedom and more speed in the construction of the mask.

    const config = {
        cpf: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
         cnpj: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/],
         date: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
         datetime: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/],
        phone: ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        time: [/\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/],
        zipcode: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
    };
    
    var mask = new Mask(config);
    
    mask.exec('1234567890','phone'); // Formatted (12) 3456-7890
    mask.exec('12345678901','cpf'); // Formatted 123.456.789-01
    
    