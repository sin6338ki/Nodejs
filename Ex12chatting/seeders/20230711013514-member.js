'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //값 추가할 때 사용
    //                               테이블이름
      await queryInterface.bulkInsert('member', [{
        id: 'testid',
        pw: '12345',
        nick: 'test'
      },{
        id: 'testid2',
        pw: '12345',
        nick: 'test2'
      }], {});
  },

  async down (queryInterface, Sequelize) {
    //전체 초기화
    await queryInterface.bulkDelete('member', null, {});
  }
};
