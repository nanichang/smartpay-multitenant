## Packages

- [Tenancy for Laravel](https://tenancyforlaravel.com/docs/v3/quickstart/): Multi-Tenancy Package for Laravel.
- [BladewindUI](https://bladewindui.com/install): A Laravel based TailwindCSS component.
- [Laravel Pulse](https://pulse.laravel.com/): Laravel Monitoring Tool.
- [Laravel Telescope](https://laravel.com/docs/8.x/telescope): Laravel Debugging Tool.
- [Sentry](https://sentry.io): Error Monitoring and reporting Tool.
- [Laravel Pint (CI/CD)](https://laravel.com/docs/11.x/pint): an opinionated PHP code style fixer for minimalists. Pint is built on top of PHP-CS-Fixer and makes it simple to ensure that your code style stays clean and consistent.
- [Laravel Passport](https://laravel.com/docs/8.x/passport): Laravel API Authentication.


## Installation

```bash
git clone git@github.com:nanichang/smartpay-multitenant.git
cd smartpay-multitenant
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan db:seed
```


### Third Party Integrations

- **[InterSwitch](https://interswitchgroup.com)**
