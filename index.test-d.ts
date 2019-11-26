import { expectType } from 'tsd';
import hash = require('.');

expectType<string>(hash('aa'));
expectType<string>(hash('aa', 123));
expectType<string>(hash('aa', '123'));
