drop table db.board;
drop table if exists db.card;
drop table if exists db.column;
drop table if exists db.board;

CREATE SCHEMA IF NOT EXISTS db;
drop table if exists db.card;
drop table if exists db.column;
drop table if exists db.board;


create table db.board(
  id_board serial primary key,
  name text
);

create table db.column(
  id_column serial primary key,
  id_board integer references db.board(id_board),
  name text,
  has_estimative boolean
);

create table db.card(
  id_card serial primary key,
  id_column integer references db.column(id_column),
  title text,
  estimative integer
);

insert into db.board(id_board, name) values (1, 'Projeto 1');
insert into db.column(id_column, id_board, name, has_estimative) values (1, 1, 'Coluna A', true);
insert into db.column(id_column, id_board, name, has_estimative) values (2, 1, 'Coluna B', true);
insert into db.column(id_column, id_board, name, has_estimative) values (3, 1, 'Coluna C', true);
insert into db.card(id_card, id_column, title, estimative) values (1, 1, 'Atividade 1', 3);
insert into db.card(id_card, id_column, title, estimative) values (2, 1, 'Atividade 2', 2);
insert into db.card(id_card, id_column, title, estimative) values (3, 1, 'Atividade 3', 1);
