'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //값 추가할 때 사용
    //                               테이블이름
      await queryInterface.bulkInsert('room', [{
        roomid: 'room1',
        title: '하이',
        owner: 'member1'
      },{
        roomid: 'room2',
        title: '안녕',
        owner: 'member2'
      },{
        roomid: 'room3',
        title: '크크크',
        owner: 'member3'
      }], {});
  },

  async down (queryInterface, Sequelize) {
    //전체 초기화
    await queryInterface.bulkDelete('room', null, {});
  }
};
