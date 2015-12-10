app.controller("myNoteCtrl", function($scope) {
$scope.title = "Best Board Game List"
$scope.games = [
    {
        name: 'Alhambra',
        minplayers: 2,
        maxplayers: 6,
        cover: 'https://cf.geekdo-images.com/images/pic1502118_md.jpg',
        likes: 0,
        dislikes: 0,
    },
    {
        name: 'Escape!',
        minplayers: 1,
        maxplayers: 5,
        pubdate: new Date('2010','01','01'),
        cover: 'assets/escape.jpg',
        likes: 0,
        dislikes: 0,
    },
    {
        name: "Smallworld",
        minplayers: 2,
        maxplayers: 5,
        cover: 'https://cf.geekdo-images.com/images/pic428828_md.jpg',
        likes: 0,
        dislikes: 0,
    },
    
    {
        name: "Treasure Hunter",
        minplayers: 2,
        maxplayers: 5,
        cover: 'https://cf.geekdo-images.com/images/pic2632365_md.jpg',
        likes: 0,
        dislikes: 0,
    }]

$scope.plusOne = function(index) {
    $scope.games[index].likes += 1;
}
$scope.minusOne = function(index) {
    $scope.games[index].dislikes += 1;
}
});
