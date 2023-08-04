import { Endpoint, Entity } from '@data-client/rest';

export class TestChild extends Entity {
  declare readonly id: number;
  declare readonly name: string;
  declare readonly value: number;

  humanize() {
    return `${this.name} - ${this.value.toLocaleString()}`;
  }

  pk() {
    return `${this.id}`;
  }
}

export class TestParent extends Entity {
  declare readonly id: number;
  declare readonly children: TestChild[];

  pk() {
    return `${this.id}`;
  }
}

const makeItem = (id: number, name: string) => ({ id, name, value: 10000000 });

export const getTestEntity = new Endpoint(
  async () =>
    Promise.resolve({
      id: 1,
      children: [makeItem(1, 'child 1'), makeItem(2, 'child 2')],
    }),
  {
    schema: TestParent,
  },
);
