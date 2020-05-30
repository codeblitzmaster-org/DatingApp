# DatingApp

**To create Angular Project**

>`ng new <Project Name>`

**To create .gitignore file**

>`touch .gitignore`

**To create dotnet core WebAPI**
>`dotnet new webapi`

**Dotnet Core: 3.1.4**

**Entity Framework 3.1.4**
- Microsoft.EntityFrameworkCore
- Microsoft.EntityFrameworkCore.Design
- Microsoft.EntityFrameworkCore.Sqlite

**Identity Model**
- Microsoft.IdentityModel.Tokens
- System.IdentityModel.Tokens.Jwt
- Microsoft.AspNetCore.Authentication.JwtBearer

Command to install dotnet EntityFramework CLI globally

`dotnet tool install --global dotnet-ef`

EF Help `dotnet ef -h`

Entity Framework Core .NET Command-line Tools 3.1.4

Usage: `dotnet ef [options] [command]`

#### Options:
  - `--version`        Show version information
  - `-h|--help`        Show help information
  - `-v|--verbose`     Show verbose output.
  - `--no-color`       Don't colorize output.
  - `--prefix-output`  Prefix output with level.

#### Commands:
  - `database`    Commands to manage the database.
  - `dbcontext`   Commands to manage DbContext types.
  - `migrations`  Commands to manage migrations.

`dotnet ef migrations -h`

Add a new Migration:

`dotnet ef migrations add InitialCreate`

Create or Update DB:

`dotnet ef database update` 
