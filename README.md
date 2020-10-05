# Bitstarz-Baccarat-Bot

1. Set starting bet (X)
2. Always bet Banker first (Bet X)
3a. On win, bet same bet but on Player next.
3b. On lose, bet 2X (twice the base bet) but on Player next.
3c. On tie, bet same bet but on Player next.
4. The next round is always alternate betting (Banker, Player, Banker, Player) regardless of the outcome.
5. The max bet will be set manually by user (If base bet is 10, and max bet is 100, then after the 4th loss, it does not bet 160, just 100)
6. Once the max bet is placed, a counter sequence is initiated. The counter should start at 2. On a win, the counter gets minus 1 (then same bet amount next round, and alternate betting B/P/B/P). On a loss, the counter gets plus 1. (same bet amount but alternate betting still). This sequence repeats until it goes to zero. At zero, it goes back to the base bet and it starts all over again.
