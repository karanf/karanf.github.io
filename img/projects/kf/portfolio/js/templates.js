var Templates = Templates || {};

Templates.gallery = [
    '{{#each images}}',
        '<img src="{{logo}}" alt="{{title}}">',
    '{{/each}}'
].join('\n');

Templates.overlay = [
	'<div class="overlay">',
        '<div class="imagecontainer clearfix">',
            '<div class="title"></div>',
            '<div class="meta"></div>',
            '<div class="description"></div>',
            '<div class="img"></div>',
        '</div>',
        '<div class="identifier"></div>',
        '<div class="close"><svg class="lnr lnr-cross-circle"><use xlink:href="#lnr-cross-circle"></use></svg></div>',
        '<div class="navleft"><svg class="lnr lnr-arrow-left-circle"><use xlink:href="#lnr-arrow-left-circle"></use></svg></div>',
        '<div class="navright"><svg class="lnr lnr-arrow-right-circle"><use xlink:href="#lnr-arrow-right-circle"></use></svg></div>',
    '</div>'
].join('\n');

Templates.image = [
	'<img src="{{image}}" alt="{{title}}">'
].join('\n');

Templates.meta = [
    '{{#each meta}}',
        '<span>{{this}}</span>',
    '{{/each}}'
].join('\n');

Templates.title = [
    '<h2>{{title}}</h2>'
].join('\n');

Templates.intro = [
    '<p>{{caption}}</p>'
].join('\n');

Templates.fullImage = [
    '{{#each full}}',
        '<img src="{{this}}">',
    '{{/each}}'
].join('\n');

var compileTemplates = function(){
	for(template in Templates){
		Templates[template] = Handlebars.compile(Templates[template]);
	}
};

compileTemplates();