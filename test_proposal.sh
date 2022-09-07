BIN=neutrond

CONTRACT=./artifacts/neutron_dao.wasm

CHAIN_ID_1=test-1
CHAIN_ID_2=test-2

NEUTRON_DIR=${NEUTRON_DIR:-../neutron}
HOME_1=${NEUTRON_DIR}/data/test-1/
HOME_2=${NEUTRON_DIR}/data/test-2/

USERNAME_1=demowallet1
USERNAME_2=demowallet2
KEY_2=$(neutrond keys show demowallet2 -a --keyring-backend test --home ${HOME_2})
ADMIN=$(neutrond keys show demowallet1 -a --keyring-backend test --home ${HOME_1})

TARGET_ADDRESS=neutron1mjk79fjjgpplak5wq838w0yd982gzkyf8fxu8u
VAL2=neutronvaloper1qnk2n4nlkpw9xfqntladh74w6ujtulwnqshepx

#Register new proposal
# json formatted proposal is a nightmare, so we use keys for now
RES=$(${BIN} tx gov submit-proposal --title="NTRN hello proposal" \
  --description="i believe in neutron supremacy" \
  --type="Text" \
  --deposit="1000000stake" \
  --from ${USERNAME_1} \
  --gas 500000 \
  --fees 5000stake \
  -y \
  --chain-id ${CHAIN_ID_1} \
  --broadcast-mode=block \
  --home ${HOME_1} \
  --keyring-backend test \
  --node tcp://127.0.0.1:16657)
echo $RES

# vote yes
RES=$(${BIN} tx gov vote 1 yes --from ${USERNAME_1} --chain-id ${CHAIN_ID_1} -y --broadcast-mode=block --home ${HOME_1}  --keyring-backend test --node tcp://127.0.0.1:16657)
echo $RES
