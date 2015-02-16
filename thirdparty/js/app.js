/** @jsx React.DOM */
(function() {
	'use strict';

	var Quiz = React.createClass({
		render: function() {
			return <div>
				{this.props.books.map(function(b) {
					return <Book title={b} />;
				})}
			</div>;
		}
	});

	var Book = React.createClass({
		render: function() {
			return <div><h4>{this.props.title}</h4></div>
		}
	});

	React.renderComponent(<Quiz books={['The Lord of The Rings', 'The Iliad']} />, 
		document.getElementById('app'));

})();