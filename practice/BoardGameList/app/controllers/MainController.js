app.controller('BGController', ['$scope', function($scope) {
    $scope.title = 'The Big Board Game List';
    $scope.promo = 'BOARD GAMES';
    $scope.games = [{
        name: 'Escape!',
        minplayers: 1,
        maxplayers: 5,
        pubdate: new Date('2010','01','01'),
        cover: 'http://cloudcapgames.com/wp-content/uploads/2012/11/escape.jpg',
        likes: 0,
        dislikes: 0,
        }]
