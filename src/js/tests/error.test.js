import ErrorRepository from '../errorRepository';

test('Неизвестная ошибка', () => {
  const errorRepository = new ErrorRepository();
  const result = errorRepository.translate(0);
  const expected = 'Unknown error';
  expect(result).toEqual(expected);
});

test('Неизвестная ошибка', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.errors.set(404, 'Персонаж не найден');
  const result = errorRepository.translate(404);
  const expected = 'Персонаж не найден';
  expect(result).toEqual(expected);
});
