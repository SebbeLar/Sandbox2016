# Jasmine
***


Sanbox enviroment for testing and learning [Jasmine](http://jasmine.github.io/)

### Install
***

Jasmine needs a test runner and I use Karma in this enviroment.

Start by installing dependencies.

**karma** - Test runner.
**karma-jasmine** - Jasmine for Karma.
**karma-chrome-launcer** - Plugin for using Chrome as browser.
**jasmine-core** - Jasmine

### Config
***

Next you need to create a config file called *karma.conf.js*.

```javascript
module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
 
    files: [
      '*.js'
    ]
  })
}
```

### Usage
***


