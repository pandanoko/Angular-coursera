(function () {
	"use strict";
	angular
		.module("LunchCheck", [])
		.controller("LunchCheckController", LunchCheckController);
	LunchCheckController.$inject = ["$scope"];

	function LunchCheckController($scope) {
		$scope.inputText = "";
		$scope.message = "";
		$scope.status = "";

		$scope.checkItems = function () {
			var items = $scope.inputText.split(",").map((item) => item.trim());
			// Remove empty items
			items = items.filter((item) => item !== "");

			if (items.length === 0) {
				$scope.message = "Please enter data first";
			} else if (items.length <= 3) {
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!";
			}
			$scope.inputText = "";
			$scope.status =
				items.length === 0 || !items.length
					? ($scope.status = "error")
					: ($scope.status = "success");
		};
	}
})();
