#!/usr/bin/env python
# -*- coding: utf-8 -*-
mes = "*****secret*****"
key = "J2msBeG8"
# padding with spaces
if len(mes) % len(key) != 0:
    n = len(key) - len(mes) % len(key)
    for i in range(n):
        mes += " "
m = []
for a in range(len(key)):
    i = a
    for b in range(len(mes)/len(key)):
        m.append(ord(mes[i]) ^ ord(key[a]))
        i += len(key)
enc_mes = ""
for j in range(len(m)):
    enc_mes += "%02x" % m[j]
print enc_mes
