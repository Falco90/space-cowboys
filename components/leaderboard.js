import {Stack, OrderedList, ListItem, Heading, Text} from "@chakra-ui/react";
import truncate from "../utils/utils";

const Leaderboard = (props) => {
    const { players } = props;

    return (
        <Stack alignItems="center" p={5}>
        <Heading size="md">Leaderboard</Heading>
        <Stack direction="row" spacing={14}>
          <Stack direction="column" alignItems="center">
            <Text>Contracts Completed</Text>
            <OrderedList>
              {players
                .sort((a, b) => b.contractsCompleted - a.contractsCompleted).slice(0, 3)
                .map((player) => {
                  return (
                    <ListItem>
                      <Text>{truncate(player.address)} ({player.contractsCompleted})</Text>
                    </ListItem>
                  );
                })}
            </OrderedList>
          </Stack>
          <Stack direction="column">
            <Text>Total Rewards Earned</Text>
          <OrderedList>
            {players
              .sort((a, b) => b.totalRewardsEarned - a.totalRewardsEarned).slice(0, 3)
              .map((player) => {
                return (
                  <ListItem>
                    <Text>{truncate(player.address)} (${player.totalRewardsEarned * 1})</Text>
                  </ListItem>
                );
              })}
          </OrderedList>
          </Stack>
        </Stack>
      </Stack>
    )
}

export default Leaderboard