{ pkgs, ... }: {

  # Which nixpkgs channel to use.
  channel = "stable-23.11";

  # Packages required
  packages = [
    pkgs.nodejs_18
    pkgs.sudo
    pkgs.python3  # <-- Add python3 to fix the ENOENT error
  ];

  # Environment variables
  env = {
    SOME_ENV_VAR = "hello";
  };

  # Extensions
  idx.extensions = [
    "angular.ng-template"
  ];

  # Preview configuration
  idx.previews = {
    enable = true;
    previews = {
      web = { command = [
          "npm"
          "run"
          "start"
        ];
        manager = "web";
      };
    };
  };
}
