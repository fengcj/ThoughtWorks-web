



describe('todoify',function(){

	describe('initialize',function(){
		it('should have been defined',function(){
			expect($.fn.todoify).toBeDefined();
		})
		it('should be chainable after invoke',function(){
			var jq = $.fn.todoify();
			expect(jq.jquery).toBeDefined();
		})
	})

	describe('with static data',function(){

		beforeEach(function(){
			
			expect(jasmine.getFixtures).toBeDefined();			   
			var fixtures = jasmine.getFixtures();

			jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
			fixtures.load('todo.html');
		})

		it('should render an one-item list',function(){
			$('input').todoify({
				data: ['one-item'],
				to: '#todo-container'
			});
			expect($('#todo-container').find('.todo').length).toBe(1);
			expect($('#todo-container').find('.todo').text()).toBe('one-item');

		})
		it('should render multiple items',function(){
			$('input').todoify({
				data:['one-item','two-item','three-item'],
				to: '#todo-container'
			});

			expect($('#todo-container').find('.todo').length).toBe(3);
		})	

		it('should be able to add new item to empty list',function(){


			$('input').todoify({
				data:[],
				to:'#todo-container'
			});

			expect($('#todo-container').find('.todo').length).toBe(0);

			 $('input').val('new item').pressEnter();

			 expect($('#todo-container').find('.todo').length).toBe(1);
			 expect($('#todo-container').find('.todo').text()).toBe('new item');		

		})	
	})





})