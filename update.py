import os
import json


if __name__ == '__main__':
    data = {}
    num_o_prob = 0
    for year in os.listdir('problems'):
        if year[0] == '.':
            continue
        data[year] = {}
        for ctf in os.listdir('problems/{}'.format(year)):
            if ctf[0] == '.':
                continue
            data[year][ctf] = []
            for prob in os.listdir('problems/{}/{}'.format(year, ctf)):
                if prob[0] == '.':
                    continue
                data[year][ctf].append(prob)
                num_o_prob += 1

    print(str(num_o_prob) + ' problems')
    with open('index.json', 'w') as f:
        json.dump(data, f)
