exports.up = async function (knex) {
  await knex.schema.createTable('mentee', (users) => {
    users.increments();
    users.string('first_name', 25).notNullable();
    users.string('last_name', 25).notNullable();
    users.string('city', 25).notNullable();
    users.string('state', 25).notNullable();
    users.string('password', 20).notNullable();
    users.string('email', 50).notNullable().unique();
    users.string('field', 30);
    users.string('almaMatar', 30);
    users.string('avatar_url');
    users.string('description', 250);
    users.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('users');
};
