import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printLottoTicketCount(count) {
    Console.print(`\n${count}개 구매했습니다.`);
  }

  static printLottoTickets(lottoTickets) {
    lottoTickets.forEach((lottoTicket) => {
      Console.print(lottoTicket.getNumbers());
    });

    OutputView.printBlankLine();
  }

  static printBlankLine() {
    Console.print('');
  }
}

export default OutputView;
