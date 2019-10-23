var Templates = Templates || {};

Templates.user = [
	'{{#each users}}',
		'<div class="user">',
			'<div class="user-title">',
				'<div class="photo"><img src="{{profileimage}}"></div>',
				'<div class="name">',
					'<p class="username">{{name}}</p>',
					'<p class="rating"></p>',
				'</div>',
			'</div>',
			
			'<div class="user-info">',
				'<div class="usercontent-wrapper">',
					'<div class="google">',
						'<img src="{{map}}">',
					'</div>',
					'<div class="icons"><span class="lnr lnr-bubble"></span></div>',
					'<div class="icons"><span class="lnr lnr-checkmark-circle"></span></div>',
					'<div class="info">',
						'<p class="from">Leaving From: {{from}}</p>',
						'<p class="to">Leaving at: {{time}}</p>',
						'<div class="friends">',
							'<p>Common friends:</p>',
						'</div>',
						'<div class="interests">',
							'<p>Common interests:</p>',
							
						'</div>',
					'</div>',
				'</div>',
			'</div>',
		'<div class="user-footer">',
			'<img src="img/arrow.png">',
		'</div>',
		'</div>',
	'{{/each}}'
].join('\n');

Templates.friends = [
	'{{#each friends}}',
		'<img src="{{this}}">',
	'{{/each}}'
].join('\n');

Templates.interests = [
	'{{#each interests}}',
		'<img src="{{this}}">',
	'{{/each}}'
].join('\n');


var compileTemplates = function(){
	for(var template in Templates){
		Templates[template] = Handlebars.compile(Templates[template]);
	}
};

compileTemplates();