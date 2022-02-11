from __future__ import print_function, unicode_literals

import functools
import hashlib
import io
import json
import os
import re
import sys
import traceback
import typing

from email.header import decode_header, make_header
from email.utils import formataddr, parseaddr
from gzip import GzipFile
from typing import Generator, Iterable

from urllib.parse import quote, urlparse
from werkzeug.test import Client

import frappe
# utility functions like cint, int, flt, etc.
from frappe.utils.data import *
from frappe.utils.html_utils import sanitize_html


@frappe.whitelist()
def get_full_user_name(user=None):
	p = frappe.db.get_value("User", user, "full_name")
	return p
